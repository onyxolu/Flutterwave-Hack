<?php

namespace App\Http\Controllers;

use App\Otp;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

class AuthController extends Controller
{

    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            if (!  $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        return response()->json(compact('token'));
    }

    private function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255|unique:users',
        ]);

        if($validator->fails()){
            return response()->json(["status"=>0, "message"=>"Validation Error", "data"=>$validator->errors()->first()]);
        }

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' =>  $request->email,
            'phone_num' => $request->phone_num,
            'password' => $request->password,
        ]);

        $token = JWTAuth::fromUser($user);

//        return compact('user','token');
        return response()->json(["status"=> 1, "message"=>"Account Registered Successfully ", "data"=>  ['user'=>$user, 'token'=>$token]]);
    }

    public function getAuthenticatedUser()
    {
        try {

            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }

        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response()->json(['token_expired'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response()->json(['token_invalid'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json(['token_absent'], $e->getStatusCode());

        }

        return response()->json(compact('user'));
    }

    private function generateOtp(){
        $i = 0; //counter
        $pin = ""; //our default pin is blank.
        $digits = 4;
        $timestamp = round(microtime(true)* 100);
        $curr_time = substr($timestamp,10);
        while($i < $digits){
            //generate a random number between 0 and 9.
            $pin .= mt_rand(0, 5);
            $i++;
        }
        $otp =  $pin.$curr_time;
        return $otp;

    }

    public function sendOtp($recipient){
        $myURL =  env('SMS_API_URL');
        $sender = env('SMS_SENDER');
        $username = (string) env('SMS_EMAIL');
        $apiKey = env('SMS_API_KEY');
        $message = $this->generateOtp();
        $options = array("username" => "$username", "apikey"=> "$apiKey" , "recipients" => $recipient,"sender" => $sender,"dndsender" => 1,"messagetext" => $message,"flash" => 0);
        $myURL .= http_build_query($options,'','&');
        $ch = curl_init();
        curl_setopt ($ch, CURLOPT_URL, $myURL);
        curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 5);
        curl_setopt ($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:7.0.1) Gecko/20100101 Firefox/7.0.1');
        $contents = curl_exec($ch);
        if(substr($contents,0,7) == "SUCCESS") {
            return $message;
        }
        return 123456;
    }

    public function createOtp($recipient){
        $otp = (int) $this->sendOtp($recipient);
        Otp::updateOrCreate(['phone_number' => $recipient],[
            "pin" => $otp,
            "updated_at" => date("Y-m-d H:m:i",strtotime("now")),
            "created_at" => date("Y-m-d H:m:i",strtotime("now"))
        ]);
        return ["status" => 001,"message" => "otp sent successfully "];
    }

    public function verifyOtp(Request $request){
        $otp =  Otp::where('phone_number',$request->phone_num)->first();

        if( (strtotime("+5 minutes") - strtotime($otp->updated_at)) < 300000  ) {

            //check otp sent is correct
            if($request->otp  == $otp->pin){
                //user is verified
                return $this->register($request);
//                return ["status" => 1,"message" => "Account verified successfully", "data"=> $user];
            }

            return ["status" => 0,"message" => "Otp sent is incorrect, please try again"];

        }

        return ["status" => 0,"message" => "Otp has expired"];
    }

    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }
}


<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\User as userResource;

class UserController extends Controller
{
    public function getUser(){
        $users = User::get();

        return UserResource::collection($users);
    }

    public function createUser(Request $request){
        return User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' =>  $request->email,
            'phone_num' => $request->phone,
             'password' => Hash::make($request->password),  
        ]);
    }
}

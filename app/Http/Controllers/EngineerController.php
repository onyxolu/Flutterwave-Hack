<?php

namespace App\Http\Controllers;

use App\Engineer;
use App\Skills;
use App\User;
use Illuminate\Http\Request;

class EngineerController extends Controller
{
    public function getEngineer($problem){
        $users = (new User)->newQuery();
        $skills = (new Skills)->newQuery();
        $filter = $skills->where('skill','like','%'.$problem.'%')->get();
        $engineer_ids = array_pluck($filter,'engineer_id');
        $engineers = Engineer::with('skills','users')->whereIn('id',$engineer_ids)->get();
        $eng_array = [];
        foreach ($engineers as $engineer ){
            $first_name = $engineer->users->first_name;
            $last_name = $engineer->users->last_name;
            $phone_number = $engineer->users->phone_num;
            $location = $engineer->location;
            $skills = array_pluck($engineer->skills,'skill');
            $final_output = array('first_name' => $first_name,"last_name"=>$last_name,"phone_numnber"=>$phone_number,"location"=>$location,"skills"=>$skills);
            array_push($eng_array,$final_output);
        }
//        dd($eng_array);
        if($eng_array === []){          
            return response()->json(["status"=>0,"message"=>"No Engineers Found"]);

        }
        return response()->json(["status"=>1,"message"=>"Engineers Found","data"=>["Engineers"=>$eng_array]]);
//        $engineer = $users->where('id',$)
    }
}

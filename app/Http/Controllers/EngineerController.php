<?php

namespace App\Http\Controllers;

use App\Engineer;
use App\Skills;
use Illuminate\Http\Request;

class EngineerController extends Controller
{
    public function getEngineer($problem){
        $engineers = new Engineer;
        $skills = Skills::where('skill',$problem)->get();

    }
}

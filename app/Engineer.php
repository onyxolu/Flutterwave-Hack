<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Engineer extends Model
{
    protected $table = 'engineer';

    protected $guarded  = [];

    public function skills(){
        return $this->hasMany(Skills::class,'engineer_id');
    }

    public function users(){
        return $this->belongsTo(User::class,'user_id');
    }
}

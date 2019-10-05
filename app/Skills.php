<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Skills extends Model
{
    protected $table = 'skills';

    protected $guarded = [];

    public function engineer(){
        return $this->belongsTo(Engineer::class);
    }

}

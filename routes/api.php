<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('/send_otp/{recipient}','AuthController@createOtp');
Route::post('/verify_otp','AuthController@verifyOtp');
//Route::post('/register', 'AuthController@register');
Route::post('/login', 'AuthController@authenticate');
Route::post('/logout', 'AuthController@logout');

<?php

namespace App\Http\Controllers;
use App\Http\Requests\HashRequest;

use Illuminate\Http\Request;

class HashController extends Controller
{
    public function show()
    {
            return view('index');
    }

    public function getData(HashRequest $request)
    {
       
        
     $data =  $request->string;
        
// return view('/welcome', compact('request'));
     $hashed = hash('sha512', $data);

 
     return view('hello', compact('hashed'));
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class questController extends Controller
{
    public function index() {
        return view('quest');
    }
}

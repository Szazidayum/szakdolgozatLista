<?php

namespace App\Http\Controllers;

use App\Models\Szakdoga;
use Illuminate\Http\Request;

class SzakdogaController extends Controller
{
    public function index()
    {
        $szakdoga = response()->json(Szakdoga::all());
        return $szakdoga;
    }

    public function show($id)
    {
        $szakdoga = Szakdoga::find($id);
        return $szakdoga;
    }

    public function store(Request $request){
        $bejegyzes = new Szakdoga();
        $bejegyzes->szakdoga_nev = $request->szakdoga_nev;
        $bejegyzes->githublink = $request->githublink;
        $bejegyzes->oldallink = $request->oldallink;
        $bejegyzes->tagokneve = $request->tagokneve;
        $bejegyzes->save();
    }

    public function update(Request $request, $id){
        $bejegyzes = Szakdoga::find($id);
        $bejegyzes->szakdoga_nev = $request->szakdoga_nev;
        $bejegyzes->githublink = $request->githublink;
        $bejegyzes->oldallink = $request->oldallink;
        $bejegyzes->tagokneve = $request->tagokneve;
        $bejegyzes->save();
    }

    public function destroy($id)
    {
        Szakdoga::find($id)->delete();
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\TransactionDetail;


class RoomController extends Controller{
    function BookingTransaction(Request $req){
    DB::beginTransaction(); 
    try{ 
        $this->validate($req,[
            'Customer_id' => 'required',
            'Room_id' => 'required'
        ]);
        

        $roomId = $req->input('Room_id');
        $transaction = new TransactionDetail;
        $transaction->Customer_id = $req->input('Customer_id');
        $transaction->room_id = $roomId;
        $transaction->TransactionDate = "";
        $transaction->price = "";
        $transaction->CheckInDate= "";
        $transaction->CheckOutDate= "";
        $transaction->save(); 
        
        DB::table('rooms')       
        ->where('id', $roomId)
        ->update(['vacant' => false , 'occupied' => true]);

        DB::commit();


        return response()->json(['message' => 'Succesfully Create Transaction Details'], 200);
    }
    catch(\Exception $e){
        DB::rollback();
        return response()->json(['message' => 'Failed to create Transaction Details, exception:' + $e], 404); 
    }
}
}

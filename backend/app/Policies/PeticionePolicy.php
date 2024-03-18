<?php
namespace App\Policies;
use App\Models\Peticione;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PeticionePolicy{
    use HandlesAuthorization;

    //role_id 1 = admin
    //role_id 0 = user normal (Cristina lo tiene como 2)
    public function before(User $user, string $ability)
    {
        if( $user->role_id==1){
            return true;
        }
    }

    public function viewAny(User $user){
        //
    }
    public function cambiarEstado(User $user, Peticione $peticione): bool
    {
        return $user->role_id==1; //solo cuando es admin
    }

    public function update(User $user,Peticione $peticione){
        return $user->role_id==0 && $peticione->user_id==$user->id;

    }

    public function firmar(User $user, Peticione $peticione){
        return $user->id!=$peticione->user_id;
    }

    public function delete(User $user,Peticione $peticione){
        return $user->role_id==0 && $peticione->user_id==$user->id;
    }

}

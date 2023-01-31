<?php

namespace App\Models\Blog\Author;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Info extends Model
{
    use HasFactory;

    protected $fillable = ['name','avatar','bio','ph_number','facebook','twitter','telegram','user_id'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

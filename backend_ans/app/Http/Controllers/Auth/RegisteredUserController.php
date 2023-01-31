<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Blog\Author\Info;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\View\View;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): View
    {
        return view('auth.register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => ['required','string'],
            'bio' => ['required','string','min:10'],
            'avatar' => ['required','url'],
            'ph_number' => ['required'],
            'facebook' => ['required','url'],
            'twitter' => ['required','url'],
            'telegram' => ['required','url'],
            'username' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        DB::beginTransaction();

        try {
            $user = User::create([
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            DB::commit();
            $info = Info::create([
                'name' => $request->name,
                'bio' => $request->bio,
                'user_id' => $user->id,
                'avatar' => $request->avatar,
                'ph_number' => $request->ph_number,
                'facebook' => $request->facebook,
                'twitter' => $request->twitter,
                'telegram' => $request->telegram,
            ]);
            DB::commit();
            // all good
        } catch (\Exception $e) {
            DB::rollback();
        }

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}

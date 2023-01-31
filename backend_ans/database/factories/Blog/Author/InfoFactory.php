<?php

namespace Database\Factories\Blog\Author;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog\Author\Info>
 */
class InfoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => 1,
            'name' => fake()->name(),
            'poster' => fake()->imageUrl(),
            'ph_number' => fake()->phoneNumber(),
            'address' => fake()->address(),
            'rating' => fake()->randomDigit(),
            'facebook' => fake()->url(),
            'gmail' => fake()->url(),
            'twitter' => fake()->url()
        ];
    }
}

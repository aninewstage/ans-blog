<?php

namespace Database\Factories\Blog;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog\Post>
 */
class PostFactory extends Factory
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
            'category_id' => 1,
            'title' => $this->faker->realText(60),
            'slug' => $this->faker->slug(),
            'poster' => $this->faker->imageUrl(),
            'tags' => $this->faker->randomElement(['anime,reviews','manga,recaps','game,news']),
            'body' => $this->faker->paragraph(13)
        ];
    }
}

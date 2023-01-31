<?php

namespace App\GraphQL\Queries;

use App\Models\Blog\Post;

final class PostResolver
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $post = Post::whereSlug($args['slug'])->firstOrFail();

        views($post)->record();
        $post->views_count = views($post)->unique()->count();

        return $post;
    }
}

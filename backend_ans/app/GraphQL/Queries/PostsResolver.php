<?php

namespace App\GraphQL\Queries;

use App\Models\Blog\Post;

final class PostsResolver
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        $posts = Post::where('title', 'like', '%'.$args['search'].'%')->orWhere('body', 'like', '%'.$args['search'].'%')->orWhere('tags', 'like', '%'.$args['search'].'%')->latest();

        return $posts;
    }
}

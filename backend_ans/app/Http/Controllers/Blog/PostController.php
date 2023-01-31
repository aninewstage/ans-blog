<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Blog\Post\StoreRequest;
use App\Http\Requests\Blog\Post\UpdateRequest;
use App\Models\Blog\Category;
use App\Models\Blog\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('category')->where('user_id', auth()->id())->latest()->get();

        return view('admin.posts.index', compact('posts'));
    }

    public function create()
    {
        $parent_cat = Category::where('parent_id', 0)->latest()->get();
        $sub_cat = Category::with('parent_category')->whereNot('parent_id', 0)->latest()->get();

        return view('admin.posts.create', compact('parent_cat', 'sub_cat'));
    }

    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        if ($data['category_id'] === null) {
            $data['category_id'] = $data['sub_category_id'];
        }

        unset($data['sub_category_id']);
        $data['user_id'] = auth()->id() ?? 1;

        $post = Post::create($data);

        if ($post) {
            return redirect(route('posts.index'))->with('success', 'Post Created Successfully');
        }

        return redirect(route('posts.index'))->with('error', 'Something Wrong!!!');
    }

    public function edit($id)
    {
        $post = Post::with('category')->findOrFail($id);

        $parent_cat = Category::where('parent_id', 0)->latest()->get();
        $sub_cat = Category::with('parent_category')->whereNot('parent_id', 0)->latest()->get();

        return view('admin.posts.edit', compact('post', 'parent_cat', 'sub_cat'));
    }

    public function update(UpdateRequest $request, $id)
    {
        $post = Post::with('category')->findOrFail($id);
        $data = $request->validated();
        if ($data['category_id'] === null) {
            $data['category_id'] = $data['sub_category_id'];
        }

        unset($data['sub_category_id']);

        $newPost = $post->update($data);

        if ($newPost) {
            return redirect(route('posts.index'))->with('success', 'Post Updated Successfully');
        }

        return redirect(route('posts.index'))->with('error', 'Something Wrong!!!');
    }
}

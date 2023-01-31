<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Blog\Category\StoreRequest;
use App\Http\Requests\Blog\Category\UpdateRequest;
use App\Models\Blog\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::with(['parent_category','sub_categories'])->latest()->get();

        return view('admin.categories.index', compact('categories'));
    }

    public function create()
    {
        $parent_cat = Category::where('parent_id', 0)->latest()->get();

        return view('admin.categories.create', compact('parent_cat'));
    }

    public function store(StoreRequest $request)
    {
        $data = $request->validated();

        $category = Category::create($data);

        if ($category) {
            return redirect(route('categories.index'))->with('success', 'Category created successfully!!!');
        }
        return redirect(route('categories.index'))->with('error', 'Something Wrong!!!');
    }

    public function edit($id)
    {
        $category = Category::with('parent_category')->findOrFail($id);
        $parent_cat = Category::where('parent_id', 0)->latest()->get();
        $sub_cat = Category::whereNot('parent_id', 0)->latest()->get();

        return view('admin.categories.edit', compact('category', 'parent_cat', 'sub_cat'));
    }

    public function update(UpdateRequest $request, $id)
    {
        $category = Category::findOrFail($id);
        $data = $request->validated();

        $newCategory = $category->update($data);

        if ($newCategory) {
            return redirect(route('categories.index'))->with('success', 'Category created successfully!!!');
        }
        return redirect(route('categories.index'))->with('error', 'Something Wrong!!!');
    }
}

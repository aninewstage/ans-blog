<?php

namespace App\Models\Blog;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name','parent_id','slug','published'];

    protected static function boot()
    {
        parent::boot();
        static::created(function ($category) {
            $category->slug = $category->generateSlug($category->name);
            $category->save();
        });
    }

    private function generateSlug($name)
    {
        if (static::whereSlug($slug = Str::slug($name))->exists()) {
            $max = static::whereTitle($name)->latest('id')->skip(1)->value('slug');
            if (isset($max[-1]) && is_numeric($max[-1])) {
                return preg_replace_callback('/(\d+)$/', function ($mathces) {
                    return $mathces[1] + 1;
                }, $max);
            }
            return "{$slug}-2";
        }
        return $slug;
    }

    public function posts()
    {
        return $this->hasMany(Post::class, 'category_id');
    }

    public function sub_categories()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function parent_category()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function scopePublished($query)
    {
        return $query->where('published', '=', 1);
    }
}

from django.shortcuts import render, get_object_or_404, redirect
from .models import Post
from .forms import PostForm
from django.contrib import messages

def home(request):
    posts = Post.objects.all().order_by('-created_at')
    return render(request, 'blog/home.html', {'posts': posts})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post})

def post_new(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Post created successfully!")
            return redirect('home')
    else:
        form = PostForm()
    return render(request, 'blog/post_form.html', {'form': form, 'title': 'New Post'})

def post_edit(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if request.method == "POST":
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            messages.success(request, "Post updated successfully!")
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm(instance=post)
    return render(request, 'blog/post_form.html', {'form': form, 'title': 'Edit Post'})

def post_delete(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if request.method == "POST":
        post.delete()
        messages.warning(request, "Post deleted.")
        return redirect('home')
    return render(request, 'blog/post_delete.html', {'post': post})

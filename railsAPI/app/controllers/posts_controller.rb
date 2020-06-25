class PostsController < ApplicationController
  before_action :set_post, only: [:edit, :update, :destroy]

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def edit
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id

    if @post.save
      redirect_to posts_path, notice: "新たな投稿をしました"
    else
      render :new
    end
  end

  def update 
    if @post.update(post_params)
      redirect_to posts_path, notice: "投稿を編集しました"
    else
      render :edit
    end
  end

  def destroy
    @post.destroy
    redirect_to posts_path, notice: "投稿を削除しました"
  end

  private

  def post_params
    params.require(:post).permit(:name, :description, :image)
  end

  def set_post
    @post = current_user.posts.find(params[:id])
  end
end

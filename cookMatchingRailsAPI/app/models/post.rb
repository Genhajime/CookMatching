class Post < ApplicationRecord
  validates :name, length: {maximum: 10}
  validates :description, length: {maximum: 140}

  belongs_to :user

  has_one_attached :image
end

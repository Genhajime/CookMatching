class User < ApplicationRecord
  has_secure_password

  validates :name, uniqueness: true, length: {maximum: 10}
  validates :email, uniqueness: true
  validates :password, length: {maximum: 10}

  has_many :posts
end
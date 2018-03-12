class Slogan < ApplicationRecord
	validates_presence_of :first, :last, :email, :slogan
	validates :first, :last, format: { with: /\A[a-zA-Z]+\z/,
    	message: "only allows letters"  }
	validates :first, :last, length: { in: 2..30,
		message: "your name is too long"  }
	validates :slogan, length: { maximum: 50,
		message: "slogan must be under 50 letters long" }
	validates_email_format_of :email, :message => 'wrong email format'
end

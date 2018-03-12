class Slogan < ApplicationRecord
	validates_presence_of :first, :last, :email, :slogan
end

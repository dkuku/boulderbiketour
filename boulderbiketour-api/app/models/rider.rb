class Rider < ApplicationRecord
	validates_presence_of :first, :last
end

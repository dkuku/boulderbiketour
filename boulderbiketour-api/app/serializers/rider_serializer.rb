class RiderSerializer < ActiveModel::Serializer
  attributes :id, :first, :last, :city, :state, :lat, :lng
end

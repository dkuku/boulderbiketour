require 'rails_helper'

RSpec.describe 'Riders requests' do
  describe 'GET /api/v1/riders' do
    it 'returns an array of riders.' do
      get('/api/v1/riders')
      json = JSON.parse(response.body)
      expect(response.status).to eql(200)
      expect(json.length).to eql(1) 
    end
  end
end

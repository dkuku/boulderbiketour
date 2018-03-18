require 'rails_helper'

RSpec.describe "GET /slogans" do
	it 'returns only the last slogan' do
    FactoryBot.create(:slogan)

		get '/api/v1/slogans'

		#test for the 200 status-code
		expect(response).to be_success
		#check to make sure only 1 slogan is returned
    expect(json).not_to be_empty
    expect(json.size).to eq(1)
    expect(json.keys).to contain_exactly('slogan')
    expect(json["slogan"].keys).to contain_exactly('id', 'first', 'last', 'email','slogan')
	end
end

describe "POST /slogan", type: :request do
  it "should add new slogan to the database" do
    slogan = {:slogan => {:first => 'John', :last => 'Doe', :email => 'email@example.co.uk', :slogan => 'slogan2' }}
    post '/api/v1/slogans', :params => slogan
    expect(response).to have_http_status(200)
		#check to make sure only 1 slogan is returned
    expect(json).not_to be_empty
    expect(json.size).to eq(1)
    expect(json.keys).to contain_exactly('slogan')
    expect(json["slogan"].keys).to contain_exactly('id', 'first', 'last', 'email','slogan')
    expect(json["slogan"]["first"]).to eq("John")
    expect(json["slogan"]["last"]).to eq("Doe")
    expect(json["slogan"]["email"]).to eq("email@example.co.uk")
    expect(json["slogan"]["slogan"]).to eq("slogan2")
  end
end

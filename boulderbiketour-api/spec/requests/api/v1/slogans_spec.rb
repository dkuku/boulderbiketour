describe "Slogans API" do
	it 'sends only the last slogan' do
		FactoryBot.create_list(:slogans, 10)

		get '/api/v1/slogans'

		#test for the 200 status-code
		expect(response).to be_success

		#check to make sure only 1 slogan is returned
		expect(json['slogans'].lenght.to eq(1))
	end
end

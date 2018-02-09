require 'test_helper'

class SlogansControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get slogans_index_url
    assert_response :success
  end

end

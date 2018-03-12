require 'test_helper'

class RidersControllerTest < ActionDispatch::IntegrationTest
  test "test index" do
    get "/api/v1/riders"
    assert_response :success
  end

  test "test reading from database" do
    @rider1 = Rider.first
    puts @rider1.id
    assert_equal(1 , Rider.count)
    assert_equal("First1", @rider1.first)
    assert_equal("Last1", @rider1.last)
    assert_equal("City1", @rider1.city)
    assert_equal("ST1", @rider1.state)
  end
  
#  test "should create rider" do
#  assert_difference('Rider.count') do
#  post "/api/v1/riders", params: { rider: { first: 'First2', last: 'Last2', city: 'City2', state: 'ST2', lat: 1.11, lng: 2.22 } }
#  end
#
#  @rider2 = Rider.last
#  assert_equal(2, Rider.count)
#  assert_equal("First2", @rider2.first)
#  assert_equal("Last2", @rider2.last)
#  assert_equal("City2", @rider2.city)
#  assert_equal("ST2" , @rider2.state)
#  assert_equal(1.11, @rider2.lat)
#  assert_equal(2.22, @rider2.lng)
#  #assert_redirected_to article_path(Article.last)
#  #assert_equal 'Article was successfully created.', flash[:notice]
#end
end

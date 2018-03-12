require 'test_helper'

class SlogansControllerTest < ActionDispatch::IntegrationTest
  test "test index" do
    get "/api/v1/slogans"
    assert_response :success
  end

  test "test reading from database" do
    @slogan = Slogan.first
    puts @slogan.id
    assert_equal(1 , Slogan.count)
    assert_equal("First" , @slogan.first)
    assert_equal("Last" , @slogan.last)
    assert_equal("em@ai.l" , @slogan.email)
    assert_equal("12.345.qwe.rt" , @slogan.slogan)
  end

  test "should create slogan" do
  assert_difference('Slogan.count') do
    post "/api/v1/slogans", params: { slogan: { first: 'Second', last: 'Last', email: 'email@em.ail', slogan: 'test slogan' } }
  end

  @slogan = Slogan.last
  assert_equal(2 , Slogan.count)
  assert_equal("Second", @slogan.first)
  assert_equal("Last", @slogan.last)
  assert_equal("email@em.ail", @slogan.email)
  assert_equal("test slogan", @slogan.slogan)
  #assert_redirected_to article_path(Article.last)
  #assert_equal 'Article was successfully created.', flash[:notice]
end
end

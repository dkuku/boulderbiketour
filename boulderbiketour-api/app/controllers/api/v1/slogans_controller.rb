module Api::V1
  class SlogansController < ApplicationController
    def index
      @slogan = Slogan.last
      render json: @slogan
    end
  end
end

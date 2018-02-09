module Api::V1
  class SlogansController < ApplicationController
    def index
      @slogans = Slogan.all
      render json: @slogans
    end
  end
end

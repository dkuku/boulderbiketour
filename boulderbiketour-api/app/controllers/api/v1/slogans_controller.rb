module Api::V1
  class SlogansController < ApplicationController
    def index
      @slogan = Slogan.last
      render json: @slogan
    end

    def create
      @slogan = Slogan.create(slogan_params)
      render json: @slogan
    end

    private
  
    def slogan_params
      params.require(:slogan).permit(:first, :last, :email, :slogan)
    end
  end
end

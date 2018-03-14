module Api::V1
  class SlogansController < ApplicationController
    def index
      @slogan = Slogan.last
      render json: @slogan
    end

    def create
      @slogan = Slogan.create(slogan_params)
      if @slogan.save
		render json: @slogan
	  else
		render json: @slogan.errors.full_messages, status: :bad_request
	  end
    end

    private

    def slogan_params
      params.require(:slogan).permit(:first, :last, :email, :slogan)
    end
  end
end

require 'rails_helper'


RSpec.describe TasksController, type: :controller do
    
    describe "tasks#index action" do
    it "should successfully show the page" do
        get :index
        expect(response).to have_http_status(:success)
        end
    end

    describe "tasks#index" do
        it "should list the tasks in the database" do
        end
    end

end

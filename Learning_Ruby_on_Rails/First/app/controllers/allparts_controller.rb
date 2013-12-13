class AllpartsController < ApplicationController

  def show
    id = params[:id] # retrieve allpart ID from URI route
    @allpart = Allparts.find(id) # look up allpart by unique ID
    # will render app/views/allparts/show.<extension> by default
  end

  def index
    #if params[:title] == :title
        #@allparts = Allparts.order('allpart.title ASC')
    #else
		#@allparts = Allparts.All
	#end
  end

  def new
    # default: render 'new' template
  end

  def create
    @allpart = Allparts.create!(params[:allpart])
    flash[:notice] = "#{@allpart.title} was successfully created."
    redirect_to allparts_path
  end

  def edit
    @allpart = Allparts.find params[:id]
  end

  def update
    @allpart = Allparts.find params[:id]
    @allpart.update_attributes!(params[:allpart])
    flash[:notice] = "#{@allpart.title} was successfully updated."
    redirect_to allpart_path(@allpart)
  end

  def destroy
    @allpart = Allparts.find(params[:id])
    @allpart.destroy
    flash[:notice] = "Allparts '#{@allpart.title}' deleted."
    redirect_to allparts_path
  end

end

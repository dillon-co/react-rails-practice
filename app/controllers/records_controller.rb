class RecordsController < ApplicationController

  def index
    @records = Record.all
  end

  def new
    @record = Record.new
    @records = Record.all
  end

  def create_new_record
    record = params[:record_hash]
    Record.create(record.as_json)
    respond_to do |format|
      format.js { render nothing: true }
    end
  end
end

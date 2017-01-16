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

  def load_records
    records = Record.all
    respond_to do |format|
      format.json { render json: records}
    end
  end
end

class Demo
  # Remember to create a migration!
  def initialize(struct)
    @struct = struct
  end

  def info
    @struct.response.inspect
  end
end

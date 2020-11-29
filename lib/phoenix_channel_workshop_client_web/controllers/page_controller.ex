defmodule PhoenixChannelWorkshopClientWeb.PageController do
  use PhoenixChannelWorkshopClientWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end

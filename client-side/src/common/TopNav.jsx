import React from "react";

function TopNav() {
  return (
    <div class="dropdown float-right m-2">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
      >
        <span class="material-icons ">account_circle</span>
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu">

      <li class="dropdown_list">
          <a href="/online_players">
          <span class="material-icons dropdown_icon0">games</span> Game
          </a>
      </li>

        <li class="dropdown_list">
          <a href="/settings">
            <span class="material-icons dropdown_icon">settings</span> Settings
          </a>
        </li>

        <li class="dropdown_list">
          <a href="/chatting">
            <span class="material-icons dropdown_icon2">chat</span>Chatting
          </a>
        </li>

        {/* <li class="dropdown_list">
          <a href="/online_games">
            <span class="material-icons dropdown_icon3">home</span> Home
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default TopNav;

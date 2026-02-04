import { useState } from 'react'
import { NavLink, Outlet } from "react-router-dom";

export const dropDown = () => {
  document.getElementById("dropdownContent").classList.toggle("show");
};

window.onclick = function(e) {
  if (!e.target.matches('#dropbtn')) {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
}

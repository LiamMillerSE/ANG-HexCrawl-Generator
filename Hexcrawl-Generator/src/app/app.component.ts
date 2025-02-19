import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { defineHex, Grid, Hex, rectangle } from 'honeycomb-grid'
import { SVG } from '@svgdotjs/svg.js'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hexcrawl-Generator';
  isServerRunning = true;
  
  
}
const MyHex = defineHex({ dimensions: 30 });
const grid = new Grid(MyHex, rectangle({ width: 10, height: 10})); 
const draw = SVG().addTo('body').size('100%', '100%')
grid.forEach(renderSVG)

function renderSVG(hex: Hex) {
  var cornnermap = ''
  hex.corners.forEach(pt => {
    cornnermap += pt.x + ',' + pt.y + ' '
  });
  const polygon = draw
    // create a polygon from a hex's corner points
    .polygon(cornnermap)
    .fill('red')
    .stroke({ width: 2, color: 'black' })

  return draw.group().add(polygon)
}
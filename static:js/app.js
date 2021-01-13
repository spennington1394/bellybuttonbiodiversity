
function buildData(sample) {
  d3.json("samples.json").then(sampledata =>{
          console.log(sampledata);
       })
   var metadata = sampledata.metadata;
   var results = array[0];
   //make sure # element is correct in index.html
   var metadata_panel = d3.select("#sample-metadata");
   metadata_panel.html("");
   // removed curly brackets from after the arrow function because was receiving a
   // parameter list error
   //removing curly brackets after arrow function. now have issue with same error but in line 14
   Object.defineProperties(results).forEach(([key,value] => 
    metadata_panel.append("p").text(`${key}:${value}`);
   );
  });
}
// Function to build chart
// removed arrow after sampledata closed parenthesis
function charts(sample){
  d3.json("samples.json").then(sampledata)
    var samples = sampledata.samples;
    var results = array [0];
    var ot_ids = results.otu_ids;
    var ot_labels = results.otu_labels;
    var sample_vals = results.sample_values;
    
    //Bubble chart
    var layoutBubble = {
      title: 'Bacteria Cultures Per Sample',
      xaxis: {title: 'OTU ID'},
      // may need to add margin and font
    };
    var dataBubble = [{
      x: ot_ids,
      y: sample_vals,
      text: otu_labels,
      mode: 'markers',
      marker:{
        size: sample_vals,
        color: ot_ids,
        colorscale: 'Viridis'
      }
    }];

    Plotly.newPlot('bubble',layoutBubble,dataBubble);

    //horizontal bar chart 

    var yTicks = ot_ids.slice(0,10).map(otuName => `Otu ${otuName}`).reverse();
    var dataHorizontal = [{
      y: yTicks,
      x: sample_vals.slice(0,10).reverse(),
      text: ot_labels.slice(0,10).reverse(),
      type:'bar',
      orientation: 'h'
    }];
    // may need to add margin and font
    var layoutHorizontal = {
      title: 'Top 10 OTUs Found in Individual',
    };
    Plotly.newPlot('bar',layoutHorizontal,dataHorizontal);
  };
};





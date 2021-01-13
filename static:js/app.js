
function buildData(sample) {
  d3.json("samples.json").then(sampledata =>{
          console.log(sampledata);
       })
   var metadata = sampledata.metadata;
   var results = array[0];
   //make sure # element is correct in index.html
   var metadata_panel = d3.select("#sample-metadata");
   metadata_panel.html("");
   Object.defineProperties(results).forEach(([key,value]=>{
     metadata_panel.append("p").text(`${key}:${value}`);
   });
  });
}
// Function 

        
   

    
    var ids = sampledata.samples[0].otu_ids
    console.log(ids);



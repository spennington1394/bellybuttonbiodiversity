
function buildData(sample) {
    d3.json("samples.json").then(sampledata =>{
            console.log(sampledata);
        })
};
        
        
   

    
    var ids = sampledata.samples[0].otu_ids
    console.log(ids);



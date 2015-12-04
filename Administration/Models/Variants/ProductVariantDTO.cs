using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Nop.Admin.Models.Variants
{
    public class ProductVariantDTO
    {
        public List<VariantCombination> combinations { get; set; }
        public decimal priceAdjustment { get; set; }
        public int quantity { get; set; }
    }

    public class VariantCombination
    {
        public string attribute { get; set; }
        public string value { get; set; }
        public string textPrompt { get; set; }
    }
}
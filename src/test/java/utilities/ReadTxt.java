package utilities;

import pojos.Product;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

public class ReadTxt {

    public static List<Product> returnCustomer(String filePath){
        List<Product>all = new ArrayList<>();
        try(BufferedReader br = new BufferedReader(new FileReader(ConfigurationReader.getProperty(filePath)))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();

            while (line != null) {
                Product product = new Product();
                sb.append(line);
                sb.append(System.lineSeparator());
                line = br.readLine();
                String [] each = line.split(",");
                product.setProductName(each[0]);
                product.setProductPrice(each[1]);

                all.add(product);
            }
            String everything = sb.toString();
        }catch (Exception e){
            e.printStackTrace();
        }
        return all;
    }

}

package utilities;

import pojos.Product;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class WriteToTxt {

    public static void saveDataInFile(String fileName, Product product)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            writer.append(product.getProductName()+" , "+product.getProductPrice());

            writer.close();
        } catch(IOException e){

        }
    }

}

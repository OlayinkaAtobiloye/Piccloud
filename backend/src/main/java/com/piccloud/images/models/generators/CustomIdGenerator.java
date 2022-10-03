package com.piccloud.images.models.generators;
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;
import java.util.UUID;

public class CustomIdGenerator implements IdentifierGenerator{
    @Override
    public String generate(SharedSessionContractImplementor sharedSessionContractImplementor, Object o) throws HibernateException {
        return "photo-"+ UUID.randomUUID().toString();
    }
}
